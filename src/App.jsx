import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import {
  FormControl,
  Select,
  List,
  ListItem,
  Box,
  Button,
  Typography,
  Container,
  MenuItem,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import { currency, flag, pages } from "./constants";
import Calculator from "./Calculator";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPage, setSelectedPage] = useState(pages[1]);

  const handleCurrencyChange = (event) => {
    setCurrentCurrency(event.target.value);
  };

  const toggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: { xs: "column", md: "row" },
                display: { xs: "flex", md: "none" },
              }}
            >
              {showMenu ? (
                <IconButton
                  sx={{ justifyContent: "start", width: "50px" }}
                  size="large"
                  onClick={() => setShowMenu(false)}
                  color="inherit"
                >
                  <CloseIcon />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ justifyContent: "start", width: "50px" }}
                  size="large"
                  onClick={() => setShowMenu(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              )}
              {showMenu && (
                <>
                  <List>
                    {pages.map((page) => (
                      <ListItem sx={{ borderTop: "1px solid #fff" }} key={page}>
                        <Button sx={{ color: "white" }}>{page}</Button>
                      </ListItem>
                    ))}
                  </List>
                  <FormControl fullWidth>
                    <Box
                      sx={{
                        backgroundColor: "primary",
                        color: "white",
                        px: 2,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        borderTop: "1px solid #fff",
                      }}
                      onClick={toggleExpansion}
                    >
                      <Box display="flex">
                        <Typography sx={{ mr: 1 }}>
                          {flag(currentCurrency)}
                        </Typography>
                        <Typography> {currentCurrency}</Typography>
                      </Box>

                      <ExpandMoreIcon
                        sx={{
                          transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    </Box>
                    {isExpanded && (
                      <Box>
                        {currency.map((curr) => (
                          <MenuItem
                            key={curr}
                            onClick={() => {
                              handleCurrencyChange({ target: { value: curr } });
                              toggleExpansion();
                            }}
                            sx={{
                              backgroundColor: "#142241",
                              color: "white",
                            }}
                          >
                            <Typography sx={{ mr: 1 }}>{flag(curr)}</Typography>
                            <Typography> {curr}</Typography>
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </FormControl>
                  <Box
                    sx={{ borderTop: "1px solid #fff" }}
                    py={2}
                    display="flex"
                  >
                    <Button variant="outlined" color="inherit" sx={{ mr: 1 }}>
                      Sign up
                    </Button>
                    <Button variant="contained" color="secondary">
                      Log in
                    </Button>
                  </Box>
                </>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: !showMenu ? "flex" : "none", md: "flex" },
              }}
            >
              <img src="/images/logo.png" alt="Logo" />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: selectedPage === page ? "secondary.main" : "white",
                    borderBottom:
                      selectedPage === page ? "1px solid #E9B109" : "none",

                    display: "block",
                  }}
                  onClick={() => setSelectedPage(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 80,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Select
                  value={currentCurrency}
                  onChange={handleCurrencyChange}
                  autoWidth
                >
                  {currency.map((curr) => (
                    <MenuItem
                      sx={{ backgroundColor: "#142241", color: "white" }}
                      value={curr}
                      key={curr}
                    >
                      <Typography sx={{ mr: 1 }}>{flag(curr)}</Typography>
                      <Typography>{curr}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "white",
                  mx: 2,
                }}
              >
                Sign up
              </Button>
              <Button
                sx={{
                  display: { xs: !showMenu ? "flex" : "none", md: "flex" },
                }}
                variant="contained"
                color="secondary"
              >
                Log in
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Calculator currentCurrency={currentCurrency} />
    </>
  );
};
export default App;
