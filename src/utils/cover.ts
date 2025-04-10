import { GetIndexFromSlugID } from "./hash";
import SpaConfig from "../../yukina.config";

/**
 * Get a image URL from the given ID, which is used for entries that do not specify a cover image.
 *
 * @param id - The ID of the entry, which is usually the slug of the entry.
 * @returns The URL of the cover image.
 */
export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const index = GetIndexFromSlugID(id, SpaConfig.banners.length);
  // Asegurarse de que banners exista y tenga elementos antes de acceder
  if (SpaConfig.banners && SpaConfig.banners.length > 0) {
      return SpaConfig.banners[index];
  }
  // Devolver una imagen por defecto o string vacío si no hay banners
  return '/default-cover.png'; // O ajusta la ruta a tu imagen por defecto
}
