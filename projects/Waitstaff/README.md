# Thinkful ~ Learn AngularJS

## Waitstaff Calculator

The Waitstaff Calculator is a tool that helps wait staff at restaurants compute meal costs and track their tips over the course of a shift. 

![screenshot](/images/waitstaff-tool.png)

There are three main components to the interface. 

- Meal Details: In the left most panel, the user enters the base cost for a meal, the tax rate, and the tip percentage the customer wants to leave. When they hit the submit button, the app should validate that the value in each field is numeric. If the form is valid, the Customer Charges and My Earnings Info section should update accordingly.
- Customer Charges: This panel displays what the customer should be charged. Subtotal is the value of the base meal price plus tax. Tip is dollar value of the tip, given the subtotal and tip percentage. Total is equal to subtotal plus tip.
- My Earnings Info: This panel displays cumulative information about all of the meals submitted so far. Tip-total is the sum of all tips computed so far. Meal count is the total number of meals input into the tool. Average tip per meal is equal to the total tip value divided by the number of meals.


When the user clicks the "Reset " button, the app should return to its initial state. All of the cumulative info should reset.