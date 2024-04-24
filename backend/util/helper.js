const groupByCountry = (countries) => {
    const numOfCountriesToShow = 2;
    const totalSum = Object.values(countries).reduce((country, { total }) => country + total, 0);

    const sortedCountries = Object.values(countries)
      .sort((a, b) => b.total - a.total)
      .slice(0, numOfCountriesToShow)
      .map(country => ({ ...country, percentage: ((country.total / totalSum) * 100) }));
  
    const remainingTotal = Object.values(countries)
      .sort((a, b) => b.total - a.total)
      .slice(numOfCountriesToShow)
      .reduce((sum, country) => sum + country.total, 0);
  
    const percentageForRemaining = (remainingTotal / totalSum) * 100;

    if (Object.keys(countries).length >= numOfCountriesToShow) sortedCountries.push({ name: 'Others', total: remainingTotal, percentage: percentageForRemaining });
  
    return sortedCountries;
}

module.exports = { groupByCountry };