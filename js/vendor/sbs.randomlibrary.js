$(document).ready(function () {
  // Shared banner overlay — update once here to change everywhere
  var bannerImg =
    '<img src="/img/banner-globe-europe.png"' +
    ' alt="EBSLG: European Business Schools Librarians\u2019 Group"' +
    ' style="position:absolute; top:0; left:0; z-index:0; opacity:1;" />';

  // Build the HTML for one library slide from a data object
  function buildSlide(lib) {
    return (
      bannerImg +
      '<img src="' +
      lib.img +
      '" alt="Photograph of library" />' +
      '<div class="orbit-caption hide-for-small">' +
      '<a href="' +
      lib.url +
      '">' +
      lib.name +
      "</a>, " +
      lib.location +
      "</div>"
    );
  }

  // Pick a random item from an array
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // --- Library data (image, url, name, location) ---

  var libraries = {
    LibAnglo: [
      {
        img: "/img/orbit-anglo-cambridge-uk.jpg",
        url: "https://www.jbs.cam.ac.uk",
        name: "Judge Business School",
        location: "Cambridge, UK",
      },
      {
        img: "/img/orbit-anglo-cass-uk-c.jpg",
        url: "https://www.bayes.citystgeorges.ac.uk",
        name: "Bayes Business School",
        location: "City, University of London, UK",
      },
      {
        img: "/img/orbit-anglo-cranfield-uk-a.jpg",
        url: "https://www.cranfield.ac.uk",
        name: "Cranfield School of Management",
        location: "Cranfield, UK",
      },
      {
        img: "/img/orbit-anglo-london-uk-a.jpg",
        url: "https://www.london.edu",
        name: "London Business School",
        location: "London, UK",
      },
      {
        img: "/img/orbit-anglo-manchester-uk.jpg",
        url: "https://www.alliancembs.manchester.ac.uk",
        name: "Alliance Manchester Business School",
        location: "Manchester, UK",
      },
      {
        img: "/img/orbit-anglo-sbs-uk.jpg",
        url: "https://www.sbs.ox.ac.uk",
        name: "Sa\u00efd Business School",
        location: "University of Oxford, UK",
      },
      {
        img: "/img/orbit-anglo-strathclyde-uk-a.jpg",
        url: "https://www.strath.ac.uk/business/",
        name: "Strathclyde Business School",
        location: "Glasgow, UK",
      },
    ],
    LibCntntl: [
      {
        img: "/img/orbit-cntntl-insead-france-a.jpg",
        url: "https://www.insead.edu/home",
        name: "INSEAD",
        location: "Fontainebleau, France",
      },
      {
        img: "/img/orbit-cntntl-dauphine-france-a.jpg",
        url: "https://www.dauphine.fr/",
        name: "Universit\u00e9 Paris Dauphine",
        location: "Paris, France",
      },
      {
        img: "/img/orbit-cntntl-eada-spain-a.jpg",
        url: "https://www.eada.edu/",
        name: "EADA Business School",
        location: "Barcelona, Spain",
      },
      {
        img: "/img/orbit-cntntl-esade-spain-a.jpg",
        url: "https://www.esade.edu/web/eng",
        name: "ESADE Business School",
        location: "Barcelona, Spain",
      },
      {
        img: "/img/orbit-cntntl-essec-france-a.jpg",
        url: "https://www.essec.fr/",
        name: "ESSEC Business School",
        location: "Cergy-Pontoise, France",
      },
      {
        img: "/img/orbit-cntntl-iebusinessschool-spain-a.jpg",
        url: "https://www.ie.edu/business-school/",
        name: "IE Business School",
        location: "Madrid, Spain",
      },
      {
        img: "/img/orbit-cntntl-iese-spain-a.jpg",
        url: "https://www.iese.edu/",
        name: "IESE Business School",
        location: "Barcelona, Spain",
      },
      {
        img: "/img/orbit-cntntl-ljubljana-slovenia-a.jpg",
        url: "https://www.ef.uni-lj.si/en",
        name: "School of Economics and Business",
        location: "University of Ljubljana, Slovenia",
      },
      {
        img: "/img/orbit-cntntl-stgallen-switzerland-a.jpg",
        url: "https://www.unisg.ch/en",
        name: "University of St. Gallen",
        location: "St.Gallen, Switzerland",
      },
      {
        img: "/img/orbit-cntntl-vlerick-gent.jpg",
        url: "https://www.vlerick.com/en",
        name: "Vlerick Business School",
        location: "Gent, Belgium",
      },
      {
        img: "/img/orbit-cntntl-vse-prague-b.jpg",
        url: "https://www.vse.cz/english/",
        name: "Prague University of Economics and Business",
        location: "Prague, Czech Republic",
      },
    ],
    LibNorth: [
      {
        img: "/img/orbit-north-aarhus-denmark-a.jpg",
        url: "https://bss.au.dk",
        name: "The School of Business and Social Sciences",
        location: "Aarhus University, Denmark",
      },
      {
        img: "/img/orbit-north-bi-norway-a.jpg",
        url: "https://www.bi.edu/",
        name: "BI Norwegian Business School",
        location: "Oslo, Norway",
      },
      {
        img: "/img/orbit-north-cbs-copenhagen.jpg",
        url: "https://www.cbs.dk/en/",
        name: "Copenhagen Business School",
        location: "Denmark",
      },
      {
        img: "/img/orbit-north-corvinus-budapest-a.jpg",
        url: "https://www.uni-corvinus.hu/?id=44509",
        name: "Corvinus University of Budapest",
        location: "Budapest, Hungary",
      },
      {
        img: "/img/orbit-north-nhh-norway-a.jpg",
        url: "https://www.nhh.no/en/home.aspx",
        name: "NHH Norwegian School of Economics",
        location: "Bergen, Norway",
      },
      {
        img: "/img/orbit-north-nyenrode-netherlands.jpg",
        url: "https://www.nyenrode.com/Pages/Default.aspx",
        name: "Nyenrode Business Universiteit",
        location: "Breukelen, Netherlands",
      },
      {
        img: "/img/orbit-north-stockholm-sweden.jpg",
        url: "https://www.hhs.se/",
        name: "Stockholm School of Economics",
        location: "Stockholm, Sweden",
      },
      {
        img: "/img/orbit-north-turku-finland-a.jpg",
        url: "https://www.utu.fi/en/units/library/Pages/home.aspx",
        name: "Turku University School of Economics",
        location: "University of Turku, Finland",
      },
      {
        img: "/img/orbit-north-whu-germany.jpg",
        url: "https://www.whu.edu/en/",
        name: "WHU - Otto Beisheim School of Management",
        location: "Germany",
      },
      {
        img: "/img/orbit-north-wu-austria-b.jpg",
        url: "https://www.wu.ac.at/en/",
        name: "WU Vienna University of Economics and Business",
        location: "Vienna, Austria",
      },
    ],
  };

  // Inject a random slide into each matching element
  Object.keys(libraries).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.innerHTML = buildSlide(randomItem(libraries[id]));
    }
  });
});

var ul = document.querySelector("ul#orbit-randomlibs");
if (ul) {
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[(Math.random() * i) | 0]);
  }
}
