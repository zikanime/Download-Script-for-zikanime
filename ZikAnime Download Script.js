
 // Change sb Episode on click
  function changeEpisodesb(slug) {
    var embeddedVideoUrl = 'https://streamsb.net/e/' + slug;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisodesb(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }

  
 // Change fast Episode on click
  function changeEpisodefast(slug) {
    var embeddedVideoUrl = 'https://short.ink/' + slug;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

function showServer(button) {
  var buttons = document.getElementsByClassName('DwnEpisode');
  var servers = document.getElementsByClassName('Server');

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] !== button) {
      buttons[i].classList.remove('active');
      servers[i].classList.remove('show');
    }
  }

  button.classList.toggle('active');
  var server = button.nextElementSibling;
  server.classList.toggle('show');
  
  var otherServers = document.getElementsByClassName('Server');
  for (var j = 0; j < otherServers.length; j++) {
    if (otherServers[j] !== server) {
      otherServers[j].classList.remove('show');
    }
  }
}

  function zikpress(slug) {
 var url = 'https://filepress.click/file/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}
function ziksb(slug) {
 var url = 'https://streamsb.net/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}
  
function ziktot(slug) {
 var url = 'https://new7.gdtot.cfd/file/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}

function zikfilemoon(slug) {
 var url = 'https://filemoon.sx/d/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}

function ziktape(slug) {
 var url = 'https://streamtape.com/v/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}

function zikmirror(slug) {
 var url = 'https://gotaku1.com/download?id='+ slug + '&typesub=ZikAnime-SUB';
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(cashurl, '_blank');
}
function zikvidstream(slug) {
 var url = 'https://gotaku1.com/download?id='+ slug + '&typesub=ZikAnime-SUB';
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(url, '_blank');
}
function zikpresswatch(slug) {
 var url = 'https://filepress.click/video/'+ slug;
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + url;
  window.open(url, '_blank');
}
  function zikanime(slug) {
  var cashurl = 'https://cashurl.win/st?api=bb9c510d65cf307d58197e723a61ea64e77ecd9a&url=' + slug;
  window.open(cashurl);
}


  
 // Change Episode on click
  function changeEpisode(embeddedVideoUrl) {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisode(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }

//show episodes when click on server
    function toggleEpisodes(series) {
    var sbEpisodes = document.getElementById("sbEpisodes");
    var fastEpisodes = document.getElementById("fastEpisodes");
    if (series == "sb") {
      sbEpisodes.style.display = sbEpisodes.style.display === 'none' ? '' : 'none';
      fastEpisodes.style.display = 'none';
    } else if (series == "fast") {
      sbEpisodes.style.display = 'none';
      fastEpisodes.style.display = fastEpisodes.style.display === 'none' ? '' : 'none';
    } 
}

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisodefast(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }

// Change FileMoon Episode on click
  function changeEpisodefilemoon(slug) {
    var embeddedVideoUrl = 'https://filemoon.sx/e/' + slug;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisodefilemoon(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }

// Change StreamTape Episode on click
  function changeEpisodetape(slug) {
    var embeddedVideoUrl = 'https://streamtape.com/e/' + slug;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisodetape(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }

// Change FilePress Episode on click
  function changeEpisodepresswatch(slug) {
    var embeddedVideoUrl = 'https://filepress.click/video/' + slug;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe src="' + embeddedVideoUrl + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"  width="640" height="360" allowfullscreen></iframe>';

    // remove the "active" class from all episode buttons
    var episodeButtons = document.querySelectorAll(".episodeButton");
    for (var i = 0; i < episodeButtons.length; i++) {
      episodeButtons[i].classList.remove("active");
    }

    // add the "active" class to the currently playing episode button
    var clickedEpisodeButton = document.querySelector('[onclick="changeEpisodepresswatch(\'' + embeddedVideoUrl + '\')"]');
    clickedEpisodeButton.classList.add("active");
  }
