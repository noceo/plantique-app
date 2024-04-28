import { Allergen } from "@/shared/interfaces/allergen.interface";
import Author from "@/shared/interfaces/author.interface";
import AllergenInfo from "../AllergenInfo/AllergenInfo";
import AuthorBadge from "../AuthorBadge/AuthorBadge";
import CustomImage from "../CustomImage/CustomImage";

interface RecipeCardProps {
  title: string;
  description: string;
  allergens: Array<Allergen>;
  isLiked: boolean;
  author: Author;
  imgSrc: string;
}

export default function RecipeCard({
  title,
  description,
  allergens,
  isLiked,
  author,
  imgSrc,
}: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <a href="/">
        <div className="recipe-card__img">
          <CustomImage src={imgSrc} alt={title} />
        </div>
        <div className="recipe-card__text-wrapper">
          <p className="recipe-card__title">{title}</p>
          <p className="recipe-card__description">{description}</p>
          <div className="recipe-card__allergens">
            <AllergenInfo allergens={allergens} />
          </div>
          <AuthorBadge
            name={author.name}
            imgSrc={author.imgSrc}
            imgAlt={`Profile picture of ${author.name}`}
          />
        </div>
      </a>
    </div>
  );
}
