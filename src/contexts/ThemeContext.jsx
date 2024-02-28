import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        body: {
            m: 0,
        },
        img: {
            display: 'block',
            maxW: '100%',
            h: 'auto',
        },
        a: {
            color: 'inherit',
            textDecoration: 'none',
            
            _active: {
                color: 'inherit',
                textDecoration: 'none',
            },
            _visited: {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        button: {
            bg: 'none',
            border: 'none',
            cursor: 'pointer',
            overflow: "hidden"
        },
        ul: {
            listStyle: 'none',
        },
    },
};

const fonts = {
    body: `
        monospace
        -apple-system, 
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Helvetica,
        Ubuntu,Cantarell,
        Arial,
        sans-serif,
        Apple Color Emoji,
        Segoe UI Emoji,
        Segoe UI Symbol
    `,
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: 'auto',
};

const theme = extendTheme({config, fonts, styles});

export default theme;