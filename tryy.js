const createAccount = (initial_name = "John Doe", initial_amnt = 5000) => {
  const name = initial_name;
  let amnt = initial_amnt;

  const withdraw = (withdraw_amnt) => {
    if (withdraw_amnt > amnt || withdraw_amnt <= 0) {
      console.log("wrong amount entered");
      return;
    }
    amnt -= withdraw_amnt;
    console.log("your current balance:", amnt);
  };

  const deposit = (deposit_amnt) => {
    if (deposit_amnt <= 0) {
      console.log("wrong amount entered");
      return;
    }
    amnt += deposit_amnt;
    console.log("your current balance:", amnt);
  };

  const inquiry = () => {
    console.log("your current balance:", amnt);
  };

  const getDetails = () => {
    console.log("Name:", name);
    console.log("current balance:", amnt);
  };

  return {
    withdraw,
    deposit,
    inquiry,
    getDetails,
  };
};

const user1 = createAccount("Dipak", 10000);
user1.getDetails();
user1.withdraw(1000);
user1.deposit(2000);
user1.inquiry();
user1.getDetails();
