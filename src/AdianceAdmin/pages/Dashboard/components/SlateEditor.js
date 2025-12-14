"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import {
  createEditor,
  Editor,
  Transforms,
  Element as SlateElement,
  Text,
  Range,
} from "slate";
import { withHistory } from "slate-history";
import isHotkey from "is-hotkey";

// --- MUI IMPORTS ---
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Button,
  TextField,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatListBulleted,
  FormatListNumbered,
  Link as LinkIcon,
  Palette as PaletteIcon,
} from "@mui/icons-material";



const HOTKEYS = { "mod+b": "bold", "mod+i": "italic", "mod+u": "underline" };
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const colorOptions = [
  { name: "Blue", value: "#BF0603" },
  { name: "Black", value: "#000000" },
  { name: "Gray", value: "#696969" },
  { name: "Light Blue", value: "#BECEDC" },
  { name: "Orange", value: "#DB7B3A" },
];

export const createEmptyParagraph = () => [
  { type: "paragraph", children: [{ text: "" }] },
];

export const isValidSlateValue = (value) => {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (node) =>
        typeof node === "object" &&
        node !== null &&
        (node.type !== undefined || node.text !== undefined)
    )
  );
};

// ===============================
// === MAIN EDITOR COMPONENT =====
// ===============================

const withLinks = (editor) => {
  const { isInline } = editor;
  editor.isInline = (element) =>
    element.type === "link" ? true : isInline(element);
  return editor;
};

export const SlateEditor = ({
  value,
  onChange,
  placeholder,
  showColorOption = true,
}) => {
  const editor = useMemo(
    () => withLinks(withHistory(withReact(createEditor()))),
    []
  );
  const initialValue = useMemo(
    () => (isValidSlateValue(value) ? value : createEmptyParagraph()),
    [value]
  );
  // Force re-mount when the incoming value actually changes so initialValue is applied
  const valueKey = useMemo(() => {
    try {
      return JSON.stringify(initialValue);
    } catch {
      return String(initialValue?.length || 0);
    }
  }, [initialValue]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2 }}>
      <Slate key={valueKey} editor={editor} initialValue={initialValue} onChange={onChange}>
        <Toolbar showColorOption={showColorOption} />
        <Box sx={{ p: 2.5, minHeight: "140px", outline: "none" }}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            spellCheck
            autoFocus
            style={{
              minHeight: 120,
              padding: 12,
              border: '1px solid #E0E3E7',
              borderRadius: 8,
              background: '#fff',
            }}
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  toggleMark(editor, HOTKEYS[hotkey]);
                }
              }
            }}
          />
        </Box>
      </Slate>
    </Paper>
  );
};

// ========================================
// === EDITOR TOOLBAR & BUTTONS ===========
// ========================================

const Toolbar = ({ showColorOption }) => (
  <Box
    sx={{
      p: 1,
      borderBottom: 1,
      borderColor: "divider",
      display: "flex",
      flexWrap: "wrap",
      gap: 1,
    }}
  >
    <ToggleButtonGroup size="small" aria-label="text formatting">
      <MarkButton format="bold" icon={<FormatBold />} tooltip="Bold" />
      <MarkButton format="italic" icon={<FormatItalic />} tooltip="Italic" />
      <MarkButton
        format="underline"
        icon={<FormatUnderlined />}
        tooltip="Underline"
      />
    </ToggleButtonGroup>
    <ToggleButtonGroup size="small" aria-label="text alignment">
      <BlockButton
        format="left"
        icon={<FormatAlignLeft />}
        tooltip="Align Left"
      />
      <BlockButton
        format="center"
        icon={<FormatAlignCenter />}
        tooltip="Align Center"
      />
      <BlockButton
        format="right"
        icon={<FormatAlignRight />}
        tooltip="Align Right"
      />
      <BlockButton
        format="justify"
        icon={<FormatAlignJustify />}
        tooltip="Justify"
      />
    </ToggleButtonGroup>
    <ToggleButtonGroup size="small" aria-label="list formatting">
      <BlockButton
        format="numbered-list"
        icon={<FormatListNumbered />}
        tooltip="Numbered List"
      />
      <BlockButton
        format="bulleted-list"
        icon={<FormatListBulleted />}
        tooltip="Bulleted List"
      />
    </ToggleButtonGroup>
    <ToggleButtonGroup size="small" aria-label="extra formatting">
      <LinkButton />
      {showColorOption && <ColorButton />}
    </ToggleButtonGroup>
  </Box>
);

const MarkButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  return (
    <Tooltip title={tooltip}>
      <ToggleButton
        value={format}
        selected={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {icon}
      </ToggleButton>
    </Tooltip>
  );
};

const BlockButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  const isAligned = TEXT_ALIGN_TYPES.includes(format);
  return (
    <Tooltip title={tooltip}>
      <ToggleButton
        value={format}
        selected={isBlockActive(editor, format, isAligned ? "align" : "type")}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {icon}
      </ToggleButton>
    </Tooltip>
  );
};

const LinkButton = () => {
  const editor = useSlate();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [noFollow, setNoFollow] = useState(false);
  const [selection, setSelection] = useState(null);

  const handleOpen = () => {
    setSelection(editor.selection);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUrl("");
    setNoFollow(false);
    setSelection(null);
  };

  const handleSave = () => {
    if (selection) {
      Transforms.select(editor, selection);
    }
    if (url) {
      insertLink(editor, url, noFollow);
    }
    handleClose();
  };

  return (
    <>
      <Tooltip title={isLinkActive(editor) ? "Remove Link" : "Insert Link"}>
        <ToggleButton
          value="link"
          selected={isLinkActive(editor)}
          onMouseDown={(event) => {
            event.preventDefault();
            if (isLinkActive(editor)) {
              unwrapLink(editor);
            } else {
              handleOpen();
            }
          }}
        >
          <LinkIcon />
        </ToggleButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Insert Link
          </Typography>
          <Stack spacing={2} mt={2}>
            <TextField
              label="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              autoFocus
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={noFollow}
                  onChange={(e) => setNoFollow(e.target.checked)}
                />
              }
              label="No Follow"
            />
          </Stack>
          <Stack direction="row" spacing={2} mt={3} justifyContent="flex-end">
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSave}>
              Insert Link
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};

const ColorButton = () => {
  const editor = useSlate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const changeColor = (color) => {
    Transforms.setNodes(editor, { color }, { match: Text.isText, split: true });
    handleClose();
  };

  return (
    <Tooltip title="Text Color">
      <>
        <ToggleButton value="color" onClick={handleClick}>
          <PaletteIcon />
        </ToggleButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {colorOptions.map((c) => (
            <MenuItem key={c.value} onClick={() => changeColor(c.value)}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "2px",
                  bgcolor: c.value,
                  mr: 1,
                  border: "1px solid #ccc",
                }}
              />
              {c.name}
            </MenuItem>
          ))}
        </Menu>
      </>
    </Tooltip>
  );
};

// ========================================
// === SLATE RENDERERS & LOGIC ============
// ========================================

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "bulleted-list":
      return (
        <ul style={{ ...style, paddingLeft: "20px" }} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol style={{ ...style, paddingLeft: "20px" }} {...attributes}>
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "link":
      return (
        <a
          href={element.url}
          rel={element.noFollow ? "nofollow" : undefined}
          style={{ color: "#1976d2", textDecoration: "underline" }}
          {...attributes}
        >
          {children}
        </a>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  return (
    <span {...attributes} style={{ color: leaf.color }}>
      {children}
    </span>
  );
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Editor.nodes(editor, {
    at: Editor.unhangRange(editor, selection),
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      n[blockType] === format,
  });
  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });

  const newProperties = {};
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties.align = isActive ? undefined : format;
  } else {
    newProperties.type = isActive ? "paragraph" : isList ? "list-item" : format;
  }
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isLinkActive = (editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
  return !!link;
};

const unwrapLink = (editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
};

const insertLink = (editor, url, noFollow) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: "link",
    url,
    noFollow,
    children: isCollapsed ? [{ text: url }] : [],
  };
  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};
