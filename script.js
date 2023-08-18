 var ArticleData = [
    {
        id: 1,
        url:"./images/boximage/p1.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2022",
        category:"Devops"
    },
    {
        id: 2,
        url:"./images/boximage/p2.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2022",
        category:"Devops"
    },
    {
        id: 3,
        url:"./images/boximage/p3.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2022",
        category:"Devops"
    },
    {
        id: 4,
        url:"./images/boximage/p4.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2022",
        category:"Devops"
    },
    {
        id: 5,
        url:"./images/boximage/p5.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "May 24,2022",
        category:"Devops"
    },
    {
        id: 6,
        url:"./images/boximage/p6.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "April 24,2020",
        category:"Terraform"
    },
    {
        id: 7,
        url:"./images/boximage/p7.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2021",
        category:"Devops"
    },
    {
        id: 8,
        url:"./images/boximage/p8.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24,2023",
        category:"Javascript"
    },
    {
        id: 9,
        url:"./images/boximage/p9.png",
        title:" Build continuous integration pipelines with GitHub Actions",
        desc:"GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
        date: "June 24 , 2022",
        category:"Cloud"
    }
 ]

 document.getElementById('test').innerHTML = ArticleData.map(data=> `<div class='wrapper'>
 <img src="${data.url}" alt="pic">
 <div class='title'>${data.title}</div>
 <div class='description'>${data.desc}</div>
 <div class="detail">
 <p>${data.date}</p>
 <p><span>🏷️<span>${data.category}</p>
 </div>
 </div>`);

 const list =[
    {
      id:1,
      category:"JavaScript"
    },
    {
        id:2,
        category:'DevOps'
      },
      {
        id:3,
        category:'Cloud'
      },
      {
        id:4,
        category:'Terraform'
      },
      {
        id:5,
        category:'Architecture'
      },
      {
        id:6,
        category:"Scalability"
      },
      {
        id:7,
        category:"Machin learning"
      }
]
document.getElementById('item').innerHTML= list.map(list =>`<li>${list.category}</li>`
)