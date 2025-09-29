from setuptools import setup, find_packages

setup(
    name="cypress-generator",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "flask",
        "flask-cors",
        "requests",
        "beautifulsoup4",
        "playwright",
        "werkzeug",
        "openai",
        "python-dotenv"
    ],
    entry_points={
        "console_scripts": [
            "cypress-generator=cli:main",
        ],
    },
)
 



 