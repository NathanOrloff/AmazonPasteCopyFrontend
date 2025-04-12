import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

interface FooterLink {
  title: string;
  url: string;
}

interface ContactInfo {
  title: string;
  data: string
}

interface FooterProps {
  contactInfo?: ContactInfo[];
  socialLinks?: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({
  contactInfo = [
    { title: 'Email', data: 'nathancorloff@gmail.com' },
    { title: 'Phone', data: '(425) 785-4019' }
  ],
  socialLinks = [
    { title: 'GitHub', url: 'https://github.com/NathanOrloff' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/nathan-orloff/' },
    { title: 'Email', url: 'mailto:nathancorloff@gmail.com' },
  ],
}) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 4,
        px: 2,
        backgroundColor: theme.palette.mode === 'light' 
          ? theme.palette.grey[200] 
          : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        {/* Main footer content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Contact section */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
            <Stack spacing={1}>
              {
                contactInfo.map((contact, index) => (
                  <Typography variant="body2" color="text.secondary" key={index}>
                    {contact.title}: {contact.data}
                  </Typography>
                ))
              }
            </Stack>
          </Box>

          {/* Social links */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Follow Me
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label={social.title}
                >
                  {social.title === 'GitHub' && <GitHubIcon />}
                  {social.title === 'Twitter' && <TwitterIcon />}
                  {social.title === 'LinkedIn' && <LinkedInIcon />}
                  {social.title === 'Email' && <EmailIcon />}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;