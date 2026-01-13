import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const SERVIS_TYPES = [
    { key: 1, label: "VK", background: "#E7F2F7" },
    { key: 3, label: "BTK", background: "#E2ECF1" },
    { key: 4, label: "Servis", background: "#D9E5EC" },
    { key: 2, label: "Instalace", background: "#D2DFE6" },
    { key: 5, label: "Odvoz/Převoz", background: "#BFD6E2" },
    { key: 6, label: "Jiné", background: "#FFDDAB" }
];

const PERIODS = [
    { key: "currentWeek", label: "Tento týden" },
    { key: "nextWeek", label: "Příští týden" },
    { key: "month", label: "Měsíc" }
];

const columns = [
    { key: "cislodokladu", label: "Č. zakázky" },
    { key: "zakaznik_nazev", label: "Zákazník" },
    { key: "zakaznik_mesto", label: "Město" },
    { key: "pristroje_nazev", label: "Přístroj" },
    { key: "pristroje_vyrobnicislo", label: "Výr. číslo" },
    { key: "pozadovanedatum", label: "Požadované datum", align: "right" },
    { key: "action", label: "Akce" }
];

// ------------------------
function isInvalidDate(dt) {
    return !dt || String(dt).startsWith("1900");
}

function isKnaplanovani(z) {
    return (
        isInvalidDate(z.naplanovanedatum) &&
        isInvalidDate(z.datumukonceni) &&
        isInvalidDate(z.datumfakturace)
    );
}

// ------------------------

function formatDateDMY(date) {
    if (!date || isInvalidDate(date)) return "";
    return new Date(date).toLocaleDateString("cs-CZ");
}

// ------------------------
function getPeriodLimits(periodKey, offset = 0) {
    const now = new Date();
    let from, to;

    if (periodKey !== "month") {
        const base = new Date();
        const day = base.getDay() || 7;
        const monday = new Date(base);
        monday.setDate(base.getDate() - day + 1);

        if (periodKey === "nextWeek") monday.setDate(monday.getDate() + 7);
        monday.setDate(monday.getDate() + offset * 7);

        from = new Date(monday);
        from.setHours(0, 0, 0, 0);

        to = new Date(monday);
        to.setDate(to.getDate() + 6);
        to.setHours(23, 59, 59, 999);

        return { from, to };
    }

    const year = now.getFullYear();
    const month = now.getMonth() + offset;

    from = new Date(year, month, 1);
    to = new Date(year, month + 1, 0, 23, 59, 59, 999);

    return { from, to };
}

// ------------------------
function filterZakazky(data, activeTab, isPeriodTab, offset) {

    // 🔑 základ = přesně to, co počítá SQL
    const knaplanovani = data.filter(isKnaplanovani);

    // ---- typové taby (VK, BTK, …)
    if (!isPeriodTab) {
        return knaplanovani.filter(
            z => z.typyzakazekid === activeTab
        );
    }

    // ---- periodické taby (týden / měsíc)
    const { from, to } = getPeriodLimits(activeTab, offset);

    return knaplanovani.filter(z => {
        if (isInvalidDate(z.pozadovanedatum)) return false;
        const d = new Date(z.pozadovanedatum);
        return d >= from && d <= to;
    });
}

// ------------------------
function getTypeCount(data, type) {
    return data.filter(z =>
        isKnaplanovani(z) &&
        z.typyzakazekid === type
    ).length;
}

function getPeriodCount(data, periodKey) {
    const { from, to } = getPeriodLimits(periodKey, 0);

    return data.filter(z =>
        isKnaplanovani(z) &&
        !isInvalidDate(z.pozadovanedatum) &&
        new Date(z.pozadovanedatum) >= from &&
        new Date(z.pozadovanedatum) <= to
    ).length;
}

// =================================================

function ServisPlanovaniWidget(props) {

    const data = props.model?.data || [];
    const [activeTab, setActiveTab] = React.useState(1);
    const [isPeriodTab, setIsPeriodTab] = React.useState(false);
    const [offset, setOffset] = React.useState(0);

    // 🔑 PŘEPNUTÍ TABU Z APPSMITH
    React.useEffect(() => {
        const tab = props.model?.activeTab;
        if (!tab) return;

        setActiveTab(tab.key);
        setIsPeriodTab(!!tab.isPeriod);
        setOffset(tab.offset ?? 0);
    }, [props.model?.activeTab]);


    const filtered = React.useMemo(() => {
        return filterZakazky(data, activeTab, isPeriodTab, offset);
    }, [data, activeTab, isPeriodTab, offset]);

    function openPopup(z) {
        appsmith.updateModel({ zakazkaToPlan: z });
        appsmith.triggerEvent("onZakazkaToPlan");
    }



    return (
        <div className="servis-root">

            <h1 className="servis-title">Plánování servisních zakázek</h1>

            <div className="servis-tabs-row">
                <div className="servis-tabs-types">
                    {SERVIS_TYPES.map(t => (
                        <button
                            key={t.key}
                            className={"servis-tab-type" + (!isPeriodTab && activeTab === t.key ? " is-active" : "")}
                            style={{ backgroundColor: (!isPeriodTab && activeTab === t.key) ? "#fff" : t.background }}
                            onClick={() => { setActiveTab(t.key); setIsPeriodTab(false); }}
                        >
                            {t.label}
                            <span className="servis-tab-badge">{getTypeCount(data, t.key)}</span>
                        </button>
                    ))}
                </div>

                <div className="servis-tabs-period">
                    {PERIODS.map(p => (
                        <button
                            key={p.key}
                            className={"servis-tab-period" + (isPeriodTab && activeTab === p.key ? " is-active" : "")}
                            onClick={() => { setActiveTab(p.key); setIsPeriodTab(true); }}
                        >
                            {p.label}
                            <span className="servis-tab-badge">{getPeriodCount(data, p.key)}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="servis-table-container">
                <table className="servis-table">
                    <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col.key} style={{ textAlign: col.align || "left" }}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan={columns.length} className="servis-empty-row">
                                Žádné zakázky k zobrazení
                            </td>
                        </tr>
                    )}

                    {filtered.map(z => (
                        <tr key={z.id}>

                            {/* číslo zakázky → odkaz */}
                            <td>
                                <a
                                    className="servis-link"
                                    onClick={() =>
                                    {
                                        appsmith.updateModel({
                                            navigateTo: {
                                                pageName: 'Editace servisní zakázky',
                                                params: {id: z.id}
                                            }
                                        })
                                        appsmith.triggerEvent("onNavigate");
                                    }
                                    }
                                >
                                    {!z.cislodokladu || z.cislodokladu === 'null' ? null : z.cislodokladu}
                                </a>
                            </td>

                            {/* zákazník → odkaz */}
                            <td>
                                <a
                                    className="servis-link"
                                    onClick={() =>
                                    {
                                        appsmith.updateModel({
                                            navigateTo: {
                                                pageName: 'Editace zákazníka',
                                                params: {id: z.zakaznikid}
                                            }
                                        })
                                        appsmith.triggerEvent("onNavigate");
                                    }
                                    }
                                >
                                    {z.zakaznik_nazev}
                                </a>
                            </td>

                            {/* město → odkaz (stejné jako zákazník) */}
                            <td>
                                <a
                                    className="servis-link"
                                    onClick={() =>
                                    {
                                        appsmith.updateModel({
                                            navigateTo: {
                                                pageName: 'Editace zákazníka',
                                                params: {id: z.zakaznikid}
                                            }
                                        })
                                        appsmith.triggerEvent("onNavigate");
                                    }
                                    }
                                >
                                    {z.zakaznik_mesto}
                                </a>
                            </td>

                            {/* přístroj → odkaz */}
                            <td>
                                <a
                                    className="servis-link"
                                    onClick={() =>
                                    {
                                        appsmith.updateModel({
                                            navigateTo: {
                                                pageName: 'Editace přístroje',
                                                params: {id: z.pristrojid}
                                            }
                                        })
                                        appsmith.triggerEvent("onNavigate");
                                    }
                                    }
                                >
                                    {z.pristroje_nazev}
                                </a>
                            </td>

                            {/* výrobní číslo */}
                            <td>{z.pristroje_vyrobnicislo}</td>

                            {/* pozadované datum */}
                            <td style={{ textAlign: "right" }}>
                                {formatDateDMY(z.pozadovanedatum)}
                            </td>

                            {/* akce – popup */}
                            <td className="servis-action-cell">
                                <button className="servis-calendar-btn" onClick={() => openPopup(z)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         fill="none" stroke="#F68C20" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </button>
                            </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}


function render() {
    const key = (appsmith.model?.data || []).length;

    ReactDOM.render(
        <ServisPlanovaniWidget
            key={key}
            model={appsmith.model}
        />,
        document.getElementById("root")
    );
}

appsmith.onReady(render);

setInterval(render, 500);