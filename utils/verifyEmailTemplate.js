const verifyEmailTemplate = ({ name, url }) => {
    return ` 
    <p> dear ${name}
    <p > Thank you for registering Blinkit.< /p>

        < a href=${url} styel= "background-color: blue; color: white; margin-top: 10px"> verify Email </a >
            
            
              `
}
export default verifyEmailTemplate