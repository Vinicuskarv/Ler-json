function carregar() {
  var url = 'https://news.google.com/rss?hl=pt-PT&gl=PT&ceid=PT:pt-150';
  $.ajax({ 
      url: "https://api.rss2json.com/v1/api.json?rss_url=" + url,
      type: 'GET',
      success: function (data) {
          objeto_json = eval(data);
          // ler o conteúdo
          var content = "";
          for (i = 0; i < objeto_json.items.length; i++){
              content += "<div class='news-item'>";
              content += "<h3>Título: <b>" + objeto_json.items[i].title + "</b></h3>";
              if (objeto_json.items[i].enclosure && objeto_json.items[i].enclosure.link) {
                  content += "<img src='" + objeto_json.items[i].enclosure.link + "' alt='Imagem da notícia'>";
              }
              content += "<p>" + objeto_json.items[i].description + "</p>";
              content += "</div>";
          }
          $("#caixa").html(content);
      },
      error: function (xhr, status) {
          alert('Ocorreu um erro.');
      }
  });
}