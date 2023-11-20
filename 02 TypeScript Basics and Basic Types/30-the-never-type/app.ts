// Sample 1:
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);

/*
  Notes:
  - Never is another type functions can return.
  - Without assign type in generateError() function (after the parameter list), it will inferred type as void
  - But you can be very clear and explicitly set never as the return type to make it really clear that this 
    never returns anything. So from a code-quality perspective, this might be clearer regarding your intentions 
    and make it really clear to our developers reading your code that this function is intended to never return 
    anything, and to essentially crash or break your script, or that part of the script.
*/
