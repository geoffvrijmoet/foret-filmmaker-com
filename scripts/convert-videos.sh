#!/bin/bash

# Directory containing the source videos
INPUT_DIR="large-videos"
# Directory for output WebM files
OUTPUT_DIR="converted-videos"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Function to convert a video
convert_video() {
    input_file="$1"
    output_file="$2"
    
    echo "Converting $input_file to $output_file..."
    
    ffmpeg -i "$input_file" \
        -c:v libvpx-vp9 \
        -b:v 2M \
        -crf 30 \
        -deadline good \
        -cpu-used 4 \
        -row-mt 1 \
        -tile-columns 6 \
        -frame-parallel 1 \
        -lag-in-frames 25 \
        -auto-alt-ref 1 \
        -arnr-maxframes 7 \
        -arnr-strength 3 \
        -aq-mode 3 \
        -c:a libopus \
        -b:a 128k \
        -y \
        "$output_file"
}

# Process all videos in the input directory
for video in "$INPUT_DIR"/*; do
    if [ -f "$video" ]; then
        filename=$(basename "$video")
        output_file="$OUTPUT_DIR/${filename%.*}.webm"
        convert_video "$video" "$output_file"
    fi
done

echo "Conversion complete!" 