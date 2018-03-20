const getSparkline = async () => {
  try {
    const results = await fetch('https://api.nomics.com/v0/sparkline');
    const jsonResults = await results.json();

    return jsonResults;
  } catch (error) {
    console.log(error);
  }
};

export default getSparkline;