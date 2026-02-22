<?php get_header(); ?>

<main class="contenu contenu-stages">

  <?php the_content(); ?>

  <section>
    <h2>Les stages</h2>
    <p data-i18n="stage.intro.p1">Dans le cadre de la formation les p&eacute;riodes de stage occupent une place essentielle. Elles permettent de mettre en pratique les connaissances acquises en centre de formation et de d&eacute;velopper des comp&eacute;tences professionnelles en situation r&eacute;elle au sein d&rsquo;une organisation.</p>
    <p data-i18n="stage.intro.p2">Les stages sont directement li&eacute;s aux blocs de comp&eacute;tences de la formation.</p>

    <p data-i18n="stage.referentiel.desc">Vous voulez conna&icirc;tre pr&eacute;cis&eacute;ment ce qui est &eacute;valu&eacute; en stage&nbsp;? T&eacute;l&eacute;chargez le r&eacute;f&eacute;rentiel officiel&nbsp;: il d&eacute;taille les blocs de comp&eacute;tences, les crit&egrave;res d&rsquo;&eacute;valuation et les attendus de chaque p&eacute;riode.</p>
    <a href="https://economiegestion-vp.ac-creteil.fr/IMG/pdf/referentielmcsno24112020.pdf" class="bouton bouton-bleu" target="_blank" rel="noopener" style="margin-bottom: 32px; display: inline-block;" data-i18n="stage.referentiel.btn">T&eacute;l&eacute;charger le r&eacute;f&eacute;rentiel MCSNO</a>

    <div class="stages-grille">

      <div class="stage-flip">
        <div class="stage-flip-inner">
          <div class="stage-flip-front cours">
            <span class="sf-icone">&#128218;</span>
            <div class="sf-valeur">20</div>
            <div class="sf-titre">semaines de cours</div>
            <div class="sf-hint">Survolez pour les d&eacute;tails</div>
          </div>
          <div class="stage-flip-back">
            <h3>Formation en classe</h3>
            <p>20 semaines de formation th&eacute;orique avec vos formateurs. Vous y acqu&eacute;rez toutes les bases professionnelles et techniques n&eacute;cessaires&nbsp;: bureautique, communication, cybers&eacute;curit&eacute; et gestion administrative.</p>
          </div>
        </div>
      </div>

      <div class="stage-flip">
        <div class="stage-flip-inner">
          <div class="stage-flip-front autonomie">
            <span class="sf-icone">&#9201;</span>
            <div class="sf-valeur">4h</div>
            <div class="sf-titre">par semaine en autonomie</div>
            <div class="sf-hint">Survolez pour les d&eacute;tails</div>
          </div>
          <div class="stage-flip-back">
            <h3>Travail en autonomie</h3>
            <p>4 heures par semaine consacr&eacute;es au travail personnel, aux r&eacute;visions et aux projets individuels. Ce temps vous permet de consolider vos acquis &agrave; votre rythme et de pr&eacute;parer les &eacute;valuations.</p>
          </div>
        </div>
      </div>

      <div class="stage-flip">
        <div class="stage-flip-inner">
          <div class="stage-flip-front stage">
            <span class="sf-icone">&#127970;</span>
            <div class="sf-valeur">12</div>
            <div class="sf-titre">semaines de stage</div>
            <div class="sf-hint">Survolez pour les d&eacute;tails</div>
          </div>
          <div class="stage-flip-back">
            <h3>Immersion professionnelle</h3>
            <p>12 semaines r&eacute;parties en 2 p&eacute;riodes de 6 semaines en milieu professionnel. Une exp&eacute;rience concr&egrave;te pour mettre en pratique vos comp&eacute;tences et d&eacute;couvrir le monde du travail.</p>
          </div>
        </div>
      </div>

    </div>

    <div class="stages-periodes">
      <h3>D&eacute;tail des p&eacute;riodes de stage</h3>
      <div class="periodes-grille">
        <div class="periode-item">
          <span class="periode-label">P&eacute;riode 1</span>
          <span class="periode-valeur">6 semaines</span>
        </div>
        <div class="periode-separateur">+</div>
        <div class="periode-item">
          <span class="periode-label">P&eacute;riode 2</span>
          <span class="periode-valeur">6 semaines</span>
        </div>
        <div class="periode-separateur">=</div>
        <div class="periode-item total">
          <span class="periode-label">Total</span>
          <span class="periode-valeur">12 semaines</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>Objectifs du stage</h2>
    <div class="apres-grille">
      <div class="apres-bloc">
        <h3>&#127919; Mettre en pratique</h3>
        <p>Appliquer en situation r&eacute;elle les comp&eacute;tences acquises en classe&nbsp;: gestion administrative, communication, outils bureautiques et num&eacute;riques.</p>
      </div>
      <div class="apres-bloc">
        <h3>&#129309; D&eacute;couvrir l&rsquo;entreprise</h3>
        <p>Int&eacute;grer une &eacute;quipe professionnelle, comprendre le fonctionnement d&rsquo;une organisation et d&eacute;velopper son sens du service et de l&rsquo;adaptation.</p>
      </div>
      <div class="apres-bloc">
        <h3>&#128203; Construire son dossier</h3>
        <p>R&eacute;diger un rapport de stage et pr&eacute;senter son exp&eacute;rience &agrave; l&rsquo;oral devant un jury pour valider l&rsquo;&eacute;preuve professionnelle de fin d&rsquo;ann&eacute;e.</p>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
