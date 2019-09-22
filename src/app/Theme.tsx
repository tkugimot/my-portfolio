import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Ubuntu\", \"Lato\", \"Roboto\", \"sans-serif\"",
    },
    palette: {
        primary: {
            light: '#a1887f', // 基本の色よりも明るい色
            main: '#6d4c41', // 基本の色
            dark: '#3e2723', // 基本の色よりも暗い色
            contrastText: '#fff', // テキストの色
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
