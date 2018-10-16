function sendApiRequest({
    url,
    method = 'GET',
    params = null,
}){
    const jwt = localStorage.getItem('JWT');
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', jwt);

    return fetch(
        url,
        {
            method: method,
            headers: headers,
            body: params && JSON.stringify(params),
        }
    )

}





export default sendApiRequest