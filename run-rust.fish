# Copy this function to `$HOME/.config/fish/config.fish`

function rust --description "Fast complie and run for leetcode | rust <target.rs>"
    set target $argv[1]

    rustc $target --out-dir rustbin

    if test $status -eq 0
        set filename (echo $target | sed 's/\.[^.]*$//')
        eval rustbin/$filename
    end
end

