// // const results = document.getElementById('json-text');
// // const r = new XMLHttpRequest();
// // r.open("GET", "http://www.filltext.com?rows=10&f={firstName}&l={lastName}", true);
// // r.onreadystatechange = () => {
// //     if (r.readyState != 4 || r.status != 200) return;
// //     const data = JSON.parse(r.responseText);
// //     data.forEach(element => {
// //         results.innerHTML += '<li>' + element.f + " " + element.l + '</li>'
// //     });
// // };
// // r.send();

// const results = document.getElementById('json-text');
// const r = new XMLHttpRequest();
// r.open("GET", "http://api.plos.org/search?");
// r.onreadystatechange = () => {
//     if (r.readyState != 4 || r.status != 200) return;
//     const data = JSON.parse(r.responseText);
//     data.forEach(element => {
//         results.innerHTML += '<li>' + element.q + '</li>'
//     });
// };
// r.send();