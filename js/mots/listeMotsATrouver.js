(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListeMotsATrouver = /** @class */ (function () {
        function ListeMotsATrouver() {
        }
        ListeMotsATrouver.Liste = ['LECTEUR', 'NARRATEUR', 'FIGARO', 'PONCTUATION', 'RECHERCHE', 'TEMPS', 'INVERTI', 'INVERSION', 'GUERMANTES', 'REYNALDO', 'SWANN', 'JALOUSIE', 'INTERMITTENCE', 'ASPERGES', 'BALBEC', 'PRINCESSE', 'COMTESSE', 'ALBERTINE', 'PHRASE', 'BATHILDE', 'COMBRAY', 'ILLIERS', 'SODOME', 'GOMORRHE', 'ANDREE', 'BLOCH', 'GONCOURT', 'BRICHOT', 'THEATRE', 'BERMA', 'CONDORCET', 'DAUDET', 'MAMAN', 'MADELEINE', 'TILLEUL', 'AUBEPINE', 'EGLISE', 'LEGRANDIN', 'BICYCLETTE', 'TELEPHONE', 'CASERNE', 'BOULOGNE', 'FAUBOURG', 'TORTILLARD', 'ELEGANCE', 'RUSKIN', 'GIOTTO', 'BOTTICELLI', 'ODETTE', 'PARFUM', 'FORCHEVILLE', 'GILBERTE', 'VERDURIN', 'MOREL', 'CHARLUS', 'AUTEUIL', 'ASTHME', 'BOTTINES', 'PELISSE', 'CAMBREMER', 'DECEPTION', 'ORIANE', 'JUPIEN', 'PROMENADE', 'FUGITIVE', 'PRISONNIERE', 'VENISE', 'PARIS', 'CRUAUTE', 'VIOLON', 'SONATE', 'FRANÇOISE', 'CHAMPI', 'DISSERTATION', 'CATHEDRALE', 'AMIENS', 'BERGOTTE', 'RACHEL', 'SAINTLOUP', 'ROBERT', 'MALADIE', 'MONDAIN', 'AGRIGENTE', 'BABAL', 'ARBRES', 'TANSONVILLE', 'SIMONET', 'TELEGRAPHE', 'OBSTACLE', 'INTELLIGENCE', 'MATINEE', 'MEMOIRE', 'LONGTEMPS', 'SOMMEIL', 'LANTERNE', 'BRABANT', 'WAGNER', 'LOHENGRIN', 'ANGOISSE', 'PLAGE', 'COTTARD', 'MEDECIN', 'NORPOIS', 'ELSTIR', 'BONTEMPS', 'GILETIER', 'LEITMOTIV', 'PHEDRE', 'DEBUSSY', 'DILETTANTE', 'SNOBISME', 'MONTESQUIOU', 'TOURAINE', 'DONCIERES', 'AMOUR', 'PAPEROLLES', 'DACTYLO', 'ALBARET', 'REDINGOTE', 'GALLIMARD', 'GRASSET', 'LEONIE', 'FLAUBERT', 'PASTICHE', 'DISPARUE', 'PHOTOGRAPHIE', 'INDIFFERENCE', 'JUDAISME', 'DREYFUS', 'MONTJOUVAIN', 'MESEGLISE', 'LASSITUDE', 'MARCEL', 'PROUST', 'ORANGEADE', 'DUCHESSE', 'ARPAJON', 'ADOLPHE', 'BASIN', 'VILLEPARISIS', 'SANTEUIL', 'BOURDON', 'FORTUNY', 'RETROUVE', 'PAVES', 'SEVIGNE', 'LIFTIER', 'TANTE', 'PARME', 'MARQUISE', 'VITRAIL', 'LAUMES', 'TISANE', 'AUTOMOBILE', 'AEROPLANE'];
        return ListeMotsATrouver;
    }());
    exports.default = ListeMotsATrouver;
});
//# sourceMappingURL=listeMotsATrouver.js.map