"""
Copy files from ../strudel to here.
"""
import argparse
from pathlib import Path
import shutil
import sys

SRC_DEFAULT = "../strudel"
DST_DEFAULT = "."


class BadDir(Exception):
    pass

class BadSrcDir(BadDir):
    pass

class BadDstDir(BadDir):
    pass


def main(srcdir: str , dstdir: str):
    strudel = Path(srcdir)
    if not strudel.is_dir():
        raise BadSrcDir(f"Bad source directory '{strudel}'")
    website = Path(dstdir)
    if not website.is_dir():
        raise BadDstDir(f"Bad destination directory '{website}'")
    strudel_html = strudel / "website" / "html"
    for src in strudel_html.glob("**/*"):
        if src.is_file() and not src.name.endswith("~") and not src.name.startswith("."):
            dst = website / src.relative_to(strudel_html)
            print(f"copy {src} -> {dst}")
            shutil.copy(src, dst)
    return 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", help=f"Source directory (default={SRC_DEFAULT})", default=SRC_DEFAULT)
    ap.add_argument("--dst", help=f"Destination directory (default={DST_DEFAULT})", default=DST_DEFAULT)
    args = ap.parse_args()

    result = 0
    try:
        main(args.src, args.dst)
    except BadDir as err:
        print(f"Bad input: {err}")
        if isinstance(err, BadSrcDir):
            print(f"Cannot read from 'strudel' repository at '{args.src}'")
        elif isinstance(err, BadDstDir):
            print(f"Cannot write to strudel-science.github.io repository at '{args.dst}'")
        result = 1
    except Exception as err:
        print(f"Unexpected error: {err}")
        result = -1

    sys.exit(result)
