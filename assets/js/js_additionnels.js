$(document).ready(function()
	{
		$('#inscrire').hide();

		$('#subscribe').click(function()
			{
				$('#inscrire').show(1000);
			});

		$('#send').click(function()
			{
				if($('#nom').val().trim().length === 0)
				{
					alert('Veuillez remplir votre nom. Merci !');
				}

				else if($('#prenoms').val().trim().length === 0)
				{
					alert('Veuillez remplir votre prenom. Merci !');
				}

				else if($('#cin').val().trim().length === 0)
				{
					alert('Veuillez remplir votre CIN. Merci !');
				}

				else if($('#phone').val().trim().length === 0)
				{
					alert('Veuillez remplir téléphone. Merci !');
				}

				else
				{
					alert('Vous êtes bien inscrit. Veuillez attendre la confirmation. Merci !');
					window.location.href = '../index.html';
				}
			});
	});
