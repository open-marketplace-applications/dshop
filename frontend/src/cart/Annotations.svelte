<script>
	let annotations = {
		mwst: 'Alle Preise verstehen sich inklusive der gesetzlichen MwSt.',
		confirm:
			' Alle Preise verstehen sich inklusive der gesetzlichen MwSt. Durch Anklicken von JETZT KAUFEN bestätigst Du den Warenkorb, sowie Deine eingegebenen Daten und stimmst unseren Datenschutzbestimmungen zu.',
		what_data: 'Was passiert mit meinen Daten?',
		what_data_text:
			'Wir verwenden deine Daten nur für eine erfolgreiche Zusendung und unsere Buchhaltung. Die Email Adresse wird benötigt, falls wir mit dir in Kontakt treten müssen. Dies tun wir aber nur, wenn es unbedingt nötig ist. Ausser du möchtest Neuigkeiten von einfachIOTA erhalten, dafür musst du nur die dazu passende Checkbox anklicken. Mehr Informationen zum Datenschutz findest du auf unserer',
		what_data_link: 'Datenschutzerklärungs Seite.'
	}
</script>

<div>
	<p>{annotations.mwst}</p>
	<p>{annotations.confirm}</p>
	<p>{annotations.what_data}</p>
	<p>{annotations.what_data_text} <a href="/privacy">{annotations.what_data_link}</a></p>
</div>
