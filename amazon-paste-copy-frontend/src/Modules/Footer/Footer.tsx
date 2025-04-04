import React from 'react';
import {
  Box,
  Container,
  Link,
  Typography,
  Divider,
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

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: FooterLink[];
  socialLinks?: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Your Company',
  year = new Date().getFullYear(),
  links = [
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'About', url: '/about' },
  ],
  socialLinks = [
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Twitter', url: 'https://twitter.com' },
    { title: 'LinkedIn', url: 'https://linkedin.com' },
    { title: 'Email', url: 'mailto:contact@example.com' },
  ],
}) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
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
          {/* Company info */}
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Providing quality services since {year}
            </Typography>
          </Box>

          {/* Links section */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Links
            </Typography>
            <Stack spacing={1}>
              {links.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.url} 
                  color="text.secondary"
                  variant="body2"
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contact section */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: (123) 456-7890
              </Typography>
            </Stack>
          </Box>

          {/* Social links */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Follow Us
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

        <Divider sx={{ my: 2 }} />

        {/* Copyright */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          textAlign="center"
        >
          {`© ${year} ${companyName}. All rights reserved.`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;