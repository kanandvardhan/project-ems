import React from "react";

export default function Team() {
  const team = [
    {
      name: "Kudipudi Sai Anand Vardhan",
      rollNo: 230350320051,
      quote: "You are the creator of your own destiny.",
      linkedin: "https://www.linkedin.com/in/kanandvardhan/",
      roll: "",
      image: "Anand",
    },
    {
      name: "Sagar Kottagattu",
      rollNo: 230350320050,
      quote: "Believe in yourself and you'll be unstoppable.",
      linkedin: "https://www.linkedin.com/in/sagar-kottagattu-01827345/",
      roll: "",
      image: "Sagar",
    },
    {
      name: "Lopes Lobo Leola Leonor",
      rollNo: 2303503200,
      quote: "Direction and consistency are of utmost importance.",
      linkedin: "https://www.linkedin.com/in/leola-lopes-lobo-a51390239/",
      roll: "",
      image: "Leola",
    },
    {
      name: "Khairnar Vivek Ramdas",
      rollNo: 2303503200,
      quote: "Success is a journey, not a destination.",
      linkedin: "https://www.linkedin.com/in/vivek-khairnar-10449626b",
      roll: "",
      image: "Vivek",
    },
    {
      name: "Khalid Ali Siddiqui",
      rollNo: 2303503200,
      quote: "The only way to do great work is to love what you do.",
      linkedin: "https://www.linkedin.com/in/khalid-siddiqui-b1b4a057",
      roll: "",
      image: "Khalid",
    },
  ];
  return (
    <main className="container-container">
      <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="pageTitle">Team - Employee Management System</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="content">
        <section class="py-5 text-center container">
          <div class="row justify-content-lg-center">
            <div class="col-lg-12 col-md-8">
              <h1 class="fw-light">Us, Who made this possible</h1>
              <p class="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              {/* <p>
                <a href="#" class="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p> */}
            </div>
          </div>
        </section>
        <hr />

        <div class="album py-5 bg-light">
          {/* container */}
          <div class="">
            <div class="row team">
              {team.map((item, idx) => (
                // col-md-5
                <div class="col-md-4 team-card">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <strong class="d-inline-block mb-2 text-primary">
                        Team
                      </strong>
                      <h3 class="mb-0">{item.name}</h3>
                      <p>({item.rollNo})</p>
                      {/* <div class="mb-1 text-muted">230350320051</div> */}
                      <p class="card-text mb-auto">"{item.quote}"</p>
                      <a href={item.linkedin} target="_blank" class="stretched-link">
                        Profile
                      </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img
                        className="thumbnail"
                        width="200"
                        height="250"
                        alt={item.name}
                        src={require(`../../img/${item.image}.webp`)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
