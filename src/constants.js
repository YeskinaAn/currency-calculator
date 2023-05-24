export const pages = [
  "OSRS Gold",
  "RS3 Gold",
  "Sell RS Gold",
  "OSRS Items",
  "OSRS Accounts",
  "Reward Chests",
];
export const currency = ["USD", "EUR", "GBP", "AUD", "CAD"];
export const goldPrice = 10;
export const eurRate = 1.1;
export const gbpRate = 1.4;
export const audRate = 0.61;
export const cadRate = 0.69;

export const flag = (currency) => {
  switch (currency) {
    case "EUR": {
      return (
        <img
          width="16"
          height="16"
          src="/images/european-union.png"
          alt="Logo"
        />
      );
    }
    case "GBP": {
      return (
        <img
          width="16"
          height="16"
          src="/images/united-kingdom.png"
          alt="Logo"
        />
      );
    }
    case "AUD": {
      return (
        <img width="16" height="16" src="/images/australia.png" alt="Logo" />
      );
    }
    case "CAD": {
      return <img width="16" height="16" src="/images/canada.png" alt="Logo" />;
    }
    default: {
      return (
        <img
          width="16"
          height="16"
          src="/images/united-states-of-america.png"
          alt="Logo"
        />
      );
    }
  }
};
