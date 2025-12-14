import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

const TableOfContents = ({ headings = [] }) => {
  // Extract only H2 headings (36px headings)
  const h2Headings = headings.filter(heading => heading.type === 'h2');

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  // Function to extract text from Slate nodes
  const extractTextFromSlate = (nodes) => {
    if (!nodes) return '';
    if (typeof nodes === 'string') return nodes;
    if (Array.isArray(nodes)) {
      return nodes.map(node => {
        if (typeof node === 'string') return node;
        if (node.text) return node.text;
        if (node.children) return extractTextFromSlate(node.children);
        return '';
      }).join(' ').trim();
    }
    if (typeof nodes === 'object' && nodes.text) {
      return nodes.text;
    }
    return '';
  };

  if (h2Headings.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        // Sticky behavior is applied to the sidebar wrapper in Blog1.jsx
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontSize: '18px',
          color: '#1a1a1a',
          marginBottom: '16px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Table of Contents
      </Typography>
      
      <List
        sx={{
          padding: 0,
          maxHeight: '180px', // ~3 items visible
          overflowY: 'auto',
          pr: 1,
          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c7c7c7',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
        }}
      >
        {h2Headings.map((heading, index) => {
          const headingText = extractTextFromSlate(heading.content?.text);
          const headingId = heading.id || `heading-${index}`;
          
          return (
            <ListItem key={headingId} sx={{ padding: 0, marginBottom: '8px' }}>
              <ListItemButton
                onClick={() => scrollToHeading(headingId)}
                sx={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#e9ecef',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <KeyboardArrowRight 
                  sx={{ 
                    fontSize: '16px', 
                    color: '#1a1a1a',
                    transition: 'transform 0.2s ease',
                  }} 
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    '&:hover': {
                      color: '#0066cc',
                    },
                  }}
                >
                  {headingText}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TableOfContents;
