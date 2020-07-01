import keytar from "keytar";

(async () => {
    await keytar.getPassword("service", "account");
})();
