# Copy this function to `$HOME/.config/fish/config.fish`

function rust --description "Fast complie and run for leetcode | rust <target.rs>"
    set target $argv[1]

    set_color green
    echo -e "\n------------[ Compiling ]------------\n"
    set_color normal

    rustc $target --out-dir rustbin

    if test $status -eq 0
        set_color green
        echo -e "\n------------[ Running ]------------\n"
        set_color normal

        set filename (echo $target | sed 's/\.[^.]*$//')
        eval rustbin/$filename
    end
end

