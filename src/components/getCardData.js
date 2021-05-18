const urlPrefix = 'https://run.mocky.io/v3/';
const cardOverviewURL = urlPrefix + '9761bf82-c85e-4435-a97e-20888cec9b9f';
const cardDetailsURL = urlPrefix + 'd50e1b3b-017b-4f52-abc5-51fdde133048';

getCardData = function(url, field) {
    return fetch(cardOverviewURL)
        .then(response => response.json())
        .then(data => data[field]);
}

export { cardOverviewURL, cardDetailsURL };