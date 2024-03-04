const img_con = document.getElementById('img-con'); 
	 const next = document.getElementById('next');
	 const prev = document.getElementById('prev');

	  const images = ['sherlock.jpg','you.jpg','yakamoz.jpg','the100.jpg','strangerThings.jpg','beyondEvil.jpeg','lost.jpg','travelers.jpg']

	  let i = images.length;


    // function for next slide 

    next.onclick = ()=> {
    	 i = (i<images.length) ?(i= i+1):(i=1);
    	 img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
    }
       

    // function for prew slide
    
    prev.onclick = ()=> {
    	 i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
    	 img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
    }
    const img_con3 = document.getElementById('img-con3'); 
	 const next3 = document.getElementById('next3');
	 const prev3 = document.getElementById('prev3');

	  const images3 = ['tomHolland.jpg','zendaya.jpg','victoriaPedretti.jpg','emmaWatson.jpg', 'danStevens.jpg', 'danielRadcliffe.jpg', 'rupertGrint.jpg','kivancTatlitug.jpg','elizaTaylor.jpg','finnWolfhard.jpg','pennBadgley.jpg','millieBobbyBrown.jpg']

	  let k = images3.length;


    // function for next slide 

    next3.onclick = ()=> {
    	 k = (k<images3.length) ?(k= k+1):(k=1);
    	 img_con3.innerHTML = "<img class='img3' src=images/"+images3[k-1]+">";
    }
       

    // function for prew slide
    
    prev3.onclick = ()=> {
    	 k = (k<images3.length+1 && k>1) ?(k= k-1):(k=images3.length);
    	 img_con3.innerHTML = "<img class='img3' src=images/"+images3[k-1]+">";
    }
    const img_con2 = document.getElementById('img-con2'); 
	 const next2 = document.getElementById('next2');
	 const prev2 = document.getElementById('prev2');

	  const images2 = ['hp1.jpg','guzelVeCirkin.jpg','spiderMan1.jpg','spiderMan2.jpg','spiderMan3.jpg','hp2.jpg','hp3.jpg','hp4.jpg','hp5.jpg','hp6.jpg','hp7.jpg','hp8.jpg']

	  let j = images2.length;


    // function for next slide 

    next2.onclick = ()=> {
    	 j = (j<images2.length) ?(j= j+1):(j=1);
    	 img_con2.innerHTML = "<img class='img2' src=images/"+images2[j-1]+">";
    }
       

    // function for prew slide
    
    prev2.onclick = ()=> {
    	 j = (j<images2.length+1 && j>1) ?(j= j-1):(j=images2.length);
    	 img_con2.innerHTML = "<img class='img2' src=images/"+images2[j-1]+">";
    }
	
	var input = document.getElementById("myInput");
	input.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
    	event.preventDefault();
    	document.getElementById("myBtn").click();
		window.location.href='index.html';
	}
	});