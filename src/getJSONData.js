function getJSONData(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.onreadystatechange = (e) => {
        return request.responseText;
    }
}

export default { getJSONData };