const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd7f0bab633mshe63252810082cb4p15c732jsn37b60eafbc81',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const content = result.content;
        // console.log(content)
        const quoteElement = document.getElementById('quoteContent')
        quoteElement.textContent = content;
    } catch (error) {
        console.error(error);
    }
})();

