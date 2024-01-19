$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown();
  });

  $('#btn-cancelar').click(function() {
    $('form').slideUp();
  });

  $('form').on('submit', function(e){
    e.preventDefault();
    const ebderecoDaNovaImagem = $('#endreco-img-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${ebderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`    
      <div class="overlay-imagem-link">
        <a href="${ebderecoDaNovaImagem}" target="_blank title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
      </div>    
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endreco-img-nova').val('')

  });
});