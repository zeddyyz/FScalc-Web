document.getElementById("results_card").style.display = "none";

function calculate_amount() {
    document.getElementById("results_card").style.display = "block";
    var doc = document.getElementById("results_card");
    doc.classList.add('animate__animated', 'animate__fadeInDown');

    var account_size = parseFloat(document.getElementById("account_size").value);
    var risk_percent = parseFloat(document.getElementById("risk_percent").value);
    var currency_conversion = parseFloat(document.getElementById("currency_conversion").value);
    var entry_price = parseFloat(document.getElementById("entry_price").value);
    var stop_loss = parseFloat(document.getElementById("stop_loss").value);
    var target_price = parseFloat(document.getElementById("target_price").value);

    var risk_amount = (account_size * (risk_percent / 100));
    var shares_amount = risk_amount / (entry_price - stop_loss) * currency_conversion;
    var loss_amount = (entry_price - stop_loss) * shares_amount * currency_conversion;
    var profit_amount = (target_price - entry_price) * shares_amount * currency_conversion;

    document.getElementById("risk_amount_output").innerHTML = "$" + risk_amount.toFixed(2);
    document.getElementById("shares_amount_output").innerHTML = Math.round(shares_amount);
    document.getElementById("profit_amount_output").innerHTML = "$" + profit_amount.toFixed(2);
}