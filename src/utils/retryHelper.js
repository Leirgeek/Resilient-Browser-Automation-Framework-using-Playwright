//retry utility function, a common defensive automation pattern 
// used in resilient browser frameworks or API testing setups.
export async function withRetry(actionFn, maxRetries = 3, delay = 1000) {
  //actionFn: an asynchronous function- the action you want to retry if it fails.
  //maxRetries: how many times to retry (defaults to 3).
  //delay: wait time (in milliseconds) between retries (defaults to 1 second).
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await actionFn();//retry function 
    } catch (err) {
      console.warn(`Attempt ${attempt} failed: ${err.message}`);
      //Handling Failures and Retry Delays 
      if (attempt === maxRetries) throw err;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}
