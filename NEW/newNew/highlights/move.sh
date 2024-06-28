#!/bin/bash

# Move all files from subdirectories to parent directory
for dir in */; do
    # Check if the directory is not the parent directory itself
    if [ "$dir" != "*/" ]; then
        # Move all files from the subdirectory to the parent directory
        mv "$dir"/* .
        # Remove the subdirectory
        rm -r "$dir"
    fi
done
