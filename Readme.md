I only use this script for personal purposes an not against anyone or any website/ server. 

Brute force JavaScript Node attack. This attack consist on knowing that the server returns different messages when we submit the login form with valid or invalid sql statements. For example, the first step is knowing the length of the username.

To get this, we can submit  this in the username field: ' or length(username) = 1 -- 

We switch the 1 for 2, 3, 4 ... n till we get a different error than "Wrong username" (In my case, this was "Invalid Password") so we know that is the correct length. We can do the same with the password field and we get both lengths.

Then, we can launch the script, which takeas advantage of the same error, basically it passes a message with the "like" sql statement with a % at the end, so any ending will fit. Then, we start submitting character by character untll we get the full password/ username content.

For example: ' or password like 'a%' -- 

It uses Node as the runtime, and the only module necessary is "request"

