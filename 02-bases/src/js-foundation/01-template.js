const emailTemplate = `
<div>
    <h1>Hi, {{ name }} </h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{ order }} </p>
</div>
`;

module.exports = {
    emailTemplate
}