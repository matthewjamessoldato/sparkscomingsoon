#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# sync-assets.sh — regenerate every image the coming-soon page serves from the
# main Spark repo's canonical lesson thumbnails.
#
#   source  ../spark/web/public/illustrations/specials/<family>/<slug>/thumb.webp
#   output  public/illustrations/mosaic/<slug>.webp   480×480 center-square crop
#           public/illustrations/cards/<slug>.webp    1920-wide 16:9
#           app/opengraph-image.jpg                   1200×630 social card
#
# Run after lessons change upstream:  bash scripts/sync-assets.sh
# Requires: cwebp, dwebp (libwebp), ffmpeg, sips (macOS).
# Fails loudly if a slug listed here no longer exists upstream — that means the
# canon moved and the page's hardcoded lists in app/page.tsx need a look too.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SPARK="${SPARK_REPO:-$ROOT/../spark}/web/public/illustrations/specials"
OUT="$ROOT/public/illustrations"

[ -d "$SPARK" ] || { echo "✗ Spark repo not found at $SPARK (set SPARK_REPO)"; exit 1; }

# Hero mosaic — all six public families (the thumb set is the uniform
# sticker/framed-art system, so culture's gold cutouts sit naturally in the
# wall). Order is interleaved so no two neighbours share a family, including
# across the wrap when the page repeats the set.
MOSAIC=(
  art-the-great-wave-off-kanagawa
  news-a-cathedral-burned-1-billion-arrived-in-48-hours
  philosophy-the-myth-of-sisyphus
  literature-sonnet-18
  science-half-the-room-misses-the-gorilla
  culture-the-queue
  art-mona-lisa
  news-four-minutes-broken-at-last
  philosophy-the-trolley-problem
  art-the-starry-night
  science-sleep-loss-is-like-being-drunk
  literature-hamlet-to-be-or-not-to-be
  art-girl-with-a-pearl-earring
  news-33-men-69-days-all-safe
  culture-the-baguette
  philosophy-the-ship-of-theseus
  art-the-raft-of-the-medusa
  science-walking-through-a-doorway-makes-you-forget
  literature-if
  art-wanderer-above-the-sea-of-fog
  news-tested-clean-drove-dirty-11-million-cars
  philosophy-who-do-you-owe-first
  art-saturn-devouring-his-son
  culture-shoes-at-the-door
  science-what-feels-like-learning-isnt-learning
  literature-stopping-by-woods-on-a-snowy-evening
  art-water-lilies
  news-lost-on-a-train-found-on-google-earth
  philosophy-the-experience-machine
  art-the-creation-of-adam
  science-what-did-the-marshmallow-test-actually-show
  culture-red-envelopes
  literature-the-tortoise-and-the-hare
  art-the-milkmaid
  news-the-art-that-shredded-itself
  philosophy-the-drowning-child
  art-the-tower-of-babel
  science-why-your-favorite-song-gives-you-chills
  literature-the-owl-and-the-pussycat
  art-olympia
  culture-personal-space
  news-one-hundred-million-users-two-years-the-argument-we-couldnt-postpone
  philosophy-the-chinese-room
  art-the-last-supper
  science-even-when-you-know-its-a-placebo-it-works
  art-las-meninas
  news-a-dog-2-500-miles-6-months-alone
  philosophy-the-banality-of-evil
  art-the-kiss
  culture-taste-and-status
  art-judith-slaying-holofernes
  science-nobodys-watching-you
  art-fountain
  news-a-man-a-field-a-kings-gold
)

# Source-gallery + anatomy cards — one per public family.
CARDS=(
  art-the-great-wave-off-kanagawa
  literature-sonnet-18
  news-33-men-69-days-all-safe
  science-half-the-room-misses-the-gorilla
  philosophy-the-myth-of-sisyphus
  culture-the-queue
)

OG_SLUG=art-the-great-wave-off-kanagawa

src_for() { # slug → absolute thumb path (family is the slug's first segment)
  local slug=$1 fam=${1%%-*}
  echo "$SPARK/$fam/$slug/thumb.webp"
}

require() {
  [ -f "$1" ] || { echo "✗ missing upstream thumb: $1"; exit 1; }
}

dims() { # path → "W H"
  sips -g pixelWidth -g pixelHeight "$1" | awk '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{print w, h}'
}

rm -rf "$OUT"
mkdir -p "$OUT/mosaic" "$OUT/cards"

echo "── mosaic (${#MOSAIC[@]} tiles, 480×480)"
for slug in "${MOSAIC[@]}"; do
  src=$(src_for "$slug"); require "$src"
  read -r W H <<<"$(dims "$src")"
  if [ "$W" -ge "$H" ]; then S=$H; X=$(( (W - S) / 2 )); Y=0; else S=$W; X=0; Y=$(( (H - S) / 2 )); fi
  cwebp -quiet -mt -m 6 -q 70 -af -crop "$X" "$Y" "$S" "$S" -resize 480 480 \
    "$src" -o "$OUT/mosaic/$slug.webp"
done

echo "── cards (${#CARDS[@]} cards, 1920-wide)"
for slug in "${CARDS[@]}"; do
  src=$(src_for "$slug"); require "$src"
  cwebp -quiet -mt -m 6 -q 72 -af -resize 1920 0 "$src" -o "$OUT/cards/$slug.webp"
done

echo "── opengraph image (1200×630)"
ffmpeg -loglevel error -y -i "$(src_for "$OG_SLUG")" \
  -vf "scale=1200:675,crop=1200:630" -q:v 3 "$ROOT/app/opengraph-image.jpg"

echo "✓ done:"
du -sh "$OUT/mosaic" "$OUT/cards" "$ROOT/app/opengraph-image.jpg"
