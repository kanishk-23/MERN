const http = require('http')
const fs = require('fs')

const app = http.createServer((req,res)=>{
    // if(req.url==='/'){
    //     res.write('<h1>Home Page</h1>')
    //     res.end()
    // }else if(req.url.toLowerCase()==='/products'){
    //     res.write('<h1>Products Page</h1>')
    //     res.end()
    // }else if(req.url.toLowerCase()==='/about-us'){
    //     res.write('<h1>About-Us Page</h1>')
    //     res.end()
    // }
    // res.write()
    if(req.url ==='/form'){
        res.write(`<h1>User Login Page</h1>`)
        res.write(`<form action="/submitted-data" method="POST" style="text-align:center; display:inline-block;">
			<label for="Name">Name:</label>
			<input  type="text" id="Name" name="Name" required placeholder="Your Name" value=""
			style="margin-top:10px; font-size:16px; background-color:white; border:1; cursor:pointer;">
			<br>
			<label for="contact">Contact:</label>
			<input type="text" id="contact" name="contact" required placeholder="Phone or Email" value=""
			pattern="(^[0-9]+$)|(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)" minlength="10"
			style="margin-top:10px;; font-size:16px; background-color:white; border:1; cursor:pointer;">
		    <br>
		    <label for="service">Choose a service:</label>
		    <select name="service" id="service"
		    style="margin-top:10px; font-size:16px; background-color:white; border:1; cursor:pointer;">
		    	<option value="washing">Washing</option>
		    	<option value="dry_cleaning">Dry Cleaning</option>
		    	<option value="ironing">Ironing</option>
		    	<option value="folding">Folding</option>
		    	<option value="pickup_delivery">Pickup & Delivery</option>
		    	<option value="stain_removal">Stain Removal</option>
		    </select>
		    <br>
		    <label for="quantity">Quantity:</label>
		    <input type="number" id="quantity" name="quantity" min="1" placeholder="1" value="quantity" required
		    style="margin-top: 10px; font-size:16px; background-color:white; border:1; cursor:pointer;">
		    <br>
		    <h3 for="paymentoption">Payment method</h3>
		    <input type="radio" name="paymentoption" id="credit_card" value="credit_card">
		    <label for="credit_card">Credit Card</label>
		    <input type="radio" name="paymentoption" id="debit_card" value="debit_card">
		    <label for="debit_card">Debit Card</label>
		    <input type="radio" name="paymentoption" id="cash_on_delivery" value="cash_on_delivery">
		    <label for="cash_on_delivery">Cash on Delivery</label>
		    <input type="radio" name="paymentoption" id="upi" value="upi">
		    <label for="upi">UPI</label>
		    <input type="radio" name="paymentoption" id="net_banking" value="net_banking">
		    <label for="net_banking">Net Banking</label>
		    <br>
		    <input type="submit"
		    style="margin-top:10px; padding:10px 20px; font-size:16px; background-color:#2963a9c7; color:rgb(255, 255, 255); border:1; border-radius:12px; cursor:pointer;"
		    value="Place an Order">
		    <br>
	    </form>`)
        res.statusCode=201;
        return res.end();
    }else if(req.url===`/redirected`){
        res.write(`<h1>Hello</h1>`)
		return res.end();
    }else if(req.method ==='POST'&& req.url.toLowerCase()===`/submitted-data`){
		res.statusCode = 302;
		// fs.writeFileSync('user-data.txt','Kanishk')
        res.setHeader('Location','/redirected')
        return res.end()
    }
    res.write('<h1>No User Input</h1>')
})

const PORT=2302;

app.listen(PORT, ()=>{
    console.log(`Node server is up on http://localhost:${PORT}`)
})