
const theme = {
    color: {
        primary: "#ff385c",
        secondary: "#00848A",
        borderColor: "#dddddd"
    },
    text: {
        primaryColor: "#484848",
        secondaryColor: "#222222",
        size_14: "14px"
    },
    mixin: {
        boxShadow: `
            
            &:hover {
                transition: box-shadow 250ms ease;
                box-shadow: 1px 2px 4px rgba(0,0,0,.18);
            }
        `
    }
}

// -- lightTheme / darkTheme

export default theme
