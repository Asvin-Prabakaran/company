async function getdata(){
    var res = await  fetch("https://www.arbeitnow.com/api/job-board-api")
    var res1 = await res.json()
    console.log(res1)

    var company = res1.data[0]
    console.log(company)

    var div = document.createElement("div")
    div.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">JOBS</div>
    <div class="card-body text-primary">
      <h1 class="card-title">company</h1>
      <p class="card-text">confirmed:${company.company_name}</p>
      <p class="card-text">confirmed:${company.location}}</p>
      <p class="card-text">confirmed:${company.tags[0]}</p>
      <p class="card-text">confirmed:${company.job_types[0]}</p>
      <p class="card-text">confirmed:${company.title}</p>
     
    </div>
  </div>`
  document.body.append(div)
}
getdata();