#!/usr/bin/env python3
import os
import json
import subprocess
from pathlib import Path

def get_duration(file_path):
    try:
        # Use ffprobe to get duration
        result = subprocess.run([
            'ffprobe',
            '-v', 'quiet',
            '-print_format', 'json',
            '-show_format',
            str(file_path)
        ], capture_output=True, text=True)
        
        data = json.loads(result.stdout)
        duration = float(data['format']['duration'])
        return duration
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

def main():
    video_dir = Path('large-videos')
    total_seconds = 0
    video_extensions = {'.mp4', '.mov', '.webm', '.avi', '.mkv'}
    
    print("\nScanning videos in large-videos directory...\n")
    print("Duration of each video:")
    print("-" * 50)
    
    for file in video_dir.iterdir():
        if file.suffix.lower() in video_extensions:
            duration = get_duration(file)
            minutes = int(duration // 60)
            seconds = int(duration % 60)
            if duration > 0:
                print(f"{file.name}: {minutes}m {seconds}s")
                total_seconds += duration

    total_minutes = int(total_seconds // 60)
    remaining_seconds = int(total_seconds % 60)
    
    print("\nTotal duration:")
    print("-" * 50)
    print(f"Minutes: {total_minutes}")
    print(f"Seconds: {remaining_seconds}")
    print(f"Total time: {total_minutes}m {remaining_seconds}s")

if __name__ == "__main__":
    main() 