import Configuration from "./configuration";
import PartieEnCours from "./partieEnCours";
import SauvegardePartie from "./sauvegardePartie";
import SauvegardeStats from "./sauvegardeStats";

export default class Sauvegardeur {
  private static readonly _cleStats = "proustle_stats";
  private static readonly _clePartieEnCours = "proustle_partieEnCours";
  private static readonly _cleConfiguration = "proustle_configuration";

  public static sauvegarderStats(stats: SauvegardeStats): void {
    localStorage.setItem(this._cleStats, JSON.stringify(stats));
  }

  public static chargerSauvegardeStats(): SauvegardeStats | undefined {
    let dataStats = localStorage.getItem(this._cleStats);
    if (!dataStats) return;

    let stats = JSON.parse(dataStats) as SauvegardeStats;
    return stats;
  }

  public static sauvegarderPartieEnCours(propositions: Array<string>, datePartie: Date): void {
    let partieEnCours: SauvegardePartie = {
      propositions: propositions,
      datePartie,
    };
    localStorage.setItem(this._clePartieEnCours, JSON.stringify(partieEnCours));
  }

  public static chargerSauvegardePartieEnCours(): PartieEnCours | undefined {
    let dataPartieEnCours = localStorage.getItem(this._clePartieEnCours);
    if (!dataPartieEnCours) return;

    let partieEnCours = JSON.parse(dataPartieEnCours) as SauvegardePartie;
    let aujourdhui = new Date();
    let datePartieEnCours = new Date(partieEnCours.datePartie);
    if (
      aujourdhui.getDate() !== datePartieEnCours.getDate() ||
      aujourdhui.getMonth() !== datePartieEnCours.getMonth() ||
      aujourdhui.getFullYear() !== datePartieEnCours.getFullYear()
    ) {
      localStorage.removeItem(this._clePartieEnCours);
      return;
    }
    return {
      datePartie: datePartieEnCours,
      propositions: partieEnCours.propositions,
    };
  }

  public static sauvegarderConfig(config: Configuration): void {
    localStorage.setItem(this._cleConfiguration, JSON.stringify(config));
  }

  public static chargerConfig(): Configuration | null {
    let dataConfig = localStorage.getItem(this._cleConfiguration);
    if (!dataConfig) return null;

    let config = JSON.parse(dataConfig) as Configuration;
    return config;
  }
}
