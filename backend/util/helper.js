const groupByCountry = (arr) => {
    const totalSum = Object.values(arr).reduce((country, { total }) => country + total, 0);

    const sortedCountries = Object.values(arr)
      .sort((a, b) => b.total - a.total)
      .slice(0, 2)
      .map(country => ({ ...country, percentage: ((country.total / totalSum) * 100) }));
  
    const remainingTotal = Object.values(arr)
      .sort((a, b) => b.total - a.total)
      .slice(2)
      .reduce((sum, country) => sum + country.total, 0);
  
    const percentageForRemaining = (remainingTotal / totalSum) * 100;

    sortedCountries.push({ name: 'Others', total: remainingTotal, percentage: percentageForRemaining });
  
    return sortedCountries;
}

module.exports = { groupByCountry };