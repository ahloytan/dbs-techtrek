const groupByCountry = (arr) => {
    const result = arr.reduce((acc, obj) => {
      const { destination: { country : { name } }, value } = obj;
      if (!acc[name]) {
        acc[name] = { name, total: 0 };
      }
      acc[name].total += 1;
      return acc;
    }, {});

    const totalSum = Object.values(result).reduce((acc, { total }) => acc + total, 0);

    const sortedCountries = Object.values(result)
      .sort((a, b) => b.total - a.total)
      .slice(0, 2)
      .map(country => ({ ...country, percentage: ((country.total / totalSum) * 100) }));
  
    const remainingTotal = Object.values(result)
      .sort((a, b) => b.total - a.total)
      .slice(2)
      .reduce((sum, country) => sum + country.total, 0);
  
    const percentageForRemaining = (remainingTotal / totalSum) * 100;

    sortedCountries.push({ name: 'Others', total: remainingTotal, percentage: percentageForRemaining });
  
    return sortedCountries;
}

module.exports = { groupByCountry };