import { Heart } from "lucide-react";
import { useState } from "react";
import { useFetcher } from "react-router";

export default function BtnFavorit({ favorite, local = true }: { favorite: boolean, local: boolean }) {

    const fetcher = useFetcher();
    const isFavorit = fetcher.formData ? !favorite : favorite;
    const [isFavorite, setIsFavorit] = useState(favorite)
    //  const isFavorit = fetcher.formData ? !favorite : favorite;

    if (local) {
        return (
            <>
                <input type="hidden" name="favorite" value={`${isFavorit}`} />
                <button type="button"
                    onClick={() => setIsFavorit(!isFavorite)}
                    className="button rounded-2xl" style={{
                        background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px',
                        display: 'flex', alignItems: 'center', gap: '6px',
                        color: isFavorit ? '#ff6b9d' : '#aaa',
                        fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '500'
                    }}>
                    {isFavorite ? 'Favori' : 'Ajouter aux favoris'}
                    <Heart size={20} fill={isFavorite ? '#ff6b9d' : 'none'} className="favorite-icon" />
                </button>

            </>
        )
    }
   
return (
    <fetcher.Form method="post">
        <input type="hidden" name="favorite" value={`${isFavorit}`} />
        <input type="hidden" name="condition" value="favorite" />
        <button
            type="submit"
            className="button"
            style={{
                background: 'transparent', border: '2px solid #f0f0f0', borderRadius: '25px',
                cursor: 'pointer', padding: '8px 0',
                display: 'flex', alignItems: 'center', gap: '6px',
                color: isFavorit ? '#ff6b9d' : '#aaa',
                fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '500'
            }}>
            <Heart size={20} fill={isFavorit ? '#ff6b9d' : 'none'} className="favorite-icon" />
            {isFavorit ? 'Favori' : 'Ajouter aux favoris'}
        </button>
    </fetcher.Form>
)
}

